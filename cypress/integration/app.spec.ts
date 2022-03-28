/// <reference types="Cypress" />

describe("Test requests", () => {
  it("test random joke without category", () => {
    cy.visit("http://localhost:3000/");

    cy.get(
      "#__next > div > main > div > div.flex.flex-col.gap-y-4 > button"
    ).click();

    cy.intercept({
      method: "POST",
      url: "https://apegro-backend-production.up.railway.app/graphql",
    }).as("getJoke");

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

    cy.get(
      "#__next > div > main > div > div.flex.flex-col.gap-y-4 > button"
    ).click();

    cy.intercept({
      method: "POST",
      url: "https://apegro-backend-production.up.railway.app/graphql",
    }).as("getJoke");

    cy.wait("@getJoke");
    cy.get("#__next > div > main > div > div.flex.flex-col.gap-y-4 > div").then(
      function ($elem) {
        const text = $elem.text();
        expect(text).to.not.include("Press the button to get a random joke!");
      }
    );
  });
});
