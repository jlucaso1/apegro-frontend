describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get(
      "#__next > div > main > div > div.flex.flex-col.gap-y-4 > button"
    ).click();

    // // The new url should include "/about"
    // cy.url().should('include', '/about')

    // wait graphql request to finish
    // it("deletes all items by making GraphQL calls", () => {
    // });
    cy.intercept({
      method: "POST",
      url: "https://apegro-backend-production.up.railway.app/graphql",
    }).as("getJoke");

    cy.wait('@getJoke')

    cy.get("#__next > div > main > div > div.flex.flex-col.gap-y-4 > div")
      .should("be.visible");
  });
});
