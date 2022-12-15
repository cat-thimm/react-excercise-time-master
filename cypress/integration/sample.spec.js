/* eslint-disable no-undef */
describe("Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  
  it("is tested", () => {
    cy.contains("TimeMaster");
  });

  it("test login", () => {
    cy.contains("TimeMaster");
    cy.get("input[name=userName]").type("cthimm");
    cy.get("input[name=password]").type("test");
    cy.get("button[type=submit]").click();

    cy.contains("Zeiterfassung");
  });

  it("test moderator", () => {
    cy.contains("TimeMaster");
    cy.get("input[name=userName]").type("hkater");
    cy.get("input[name=password]").type("test");
    cy.get("button[type=submit]").click();

    cy.contains("Moderation");
  });
  it("test admin", () => {
    cy.contains("TimeMaster");
    cy.get("input[name=userName]").type("ameier");
    cy.get("input[name=password]").type("test");
    cy.get("button[type=submit]").click();

    cy.contains("Admin");
  });


  it("redirect to login when url changes to non-existing user", () => {
    cy.contains("TimeMaster");
    cy.get("input[name=userName]").type("ameier");
    cy.get("input[name=password]").type("test");
    cy.get("button[type=submit]").click();

    cy.visit("localhost:3000/fjnadsoi/zeiterfassung");
    cy.contains('Login')
  });
});
