/// <reference types="Cypress" />

describe("Test requests in index page", () => {
  it("test random joke without category", () => {
    cy.visit("http://localhost:3000/");

    cy.intercept("https://apegro-backend-production.up.railway.app/graphql").as(
      "getJoke"
    );

    cy.get(
      "#__next > div > main > div > div.flex.flex-col.gap-y-4 > button"
    ).click();

    cy.wait("@getJoke");

    cy.get("#__next > div > main > div > div.flex.flex-col.gap-y-4 > div").then(
      function ($elem) {
        const text = $elem.text();
        expect(text).to.not.include("Press the button to get a random joke!");
      }
    );
  });

  it("test random joke with category", () => {
    cy.visit("http://localhost:3000/");

    cy.intercept({
      method: "POST",
      url: "https://apegro-backend-production.up.railway.app/graphql",
    }).as("getJokeWithCategory");

    cy.get(
      "#__next > div > main > div > div.flex.flex-col.absolute.mx-auto.bottom-7.left-0.right-0.items-center.gap-y-5 > div > button:nth-child(1)"
    ).click();

    cy.wait("@getJokeWithCategory");

    cy.get("#__next > div > main > div > div.flex.flex-col.gap-y-4 > div").then(
      function ($elem) {
        const text = $elem.text();
        expect(text).to.not.include("Press the button to get a random joke!");
      }
    );
  });
});

describe("Test seach page", () => {
  it("search with valid results", () => {
    cy.visit("http://localhost:3000/search");

    cy.intercept("https://apegro-backend-production.up.railway.app/graphql").as(
      "searchJoke"
    );

    cy.get("#__next > div > main > div > form > input").type("arnold");

    cy.get("#__next > div > main > div > form > button").click();

    cy.wait("@searchJoke");

    cy.get("#__next > div > main > div > div").then(function ($elem) {
      // check if element has children
      expect($elem.children().length).to.be.greaterThan(0);
    });
  });

  it("search with empty results", () => {
    cy.visit("http://localhost:3000/search");

    cy.intercept("https://apegro-backend-production.up.railway.app/graphql").as(
      "searchJoke"
    );

    cy.get("#__next > div > main > div > form > input").type(
      "noresultsforthis"
    );

    cy.get("#__next > div > main > div > form > button").click();

    cy.wait("@searchJoke");

    cy.get("#__next > div > main > div > div > div").then(function ($elem) {
      expect($elem.text()).to.equal("No results found");
    });
  });
});

describe("Test navigations", () => {
  it("index page to search page", () => {
    cy.visit("http://localhost:3000/");

    cy.get(
      "#__next > div > main > div > div.flex.flex-col.absolute.mx-auto.bottom-7.left-0.right-0.items-center.gap-y-5 > button"
    ).click();

    cy.url().should("include", "/search");
  });

  it("search page to index page", () => {
    cy.visit("http://localhost:3000/search");

    cy.get("#__next > div > header > div > img").click();

    cy.url().should("include", "/");
  });
});
