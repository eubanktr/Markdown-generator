// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projTitle}\n
  TABLE OF CONTENTS
  =========================
  [Description](#Description)
  [Notes](#Notes)
  [Usage Information](#Usage-Information)
  [Contributions](#Contributions)
  [Testing Info](#Testing-Information)
  [Licensing](#Licensing)
  [Questions](#Questions)

  ## Description
  ${answers.projDescription}\n
  ## Notes
  ${answers.projNotes}\n
  ## Usage Information
  ${answers.projUsage}\n
  ## Contributions
  ${answers.projContribution}\n
  ## Testing Information
  ${answers.projTesting}\n
  ## Licensing
  ${answers.projLicense}\n
  ## Questions
  GitHub Username: https://github.com/${answers.projGit.toLowerCase().trim()}
  If you have any questions please reach out via email. Email address: ${answers.projEmail}
`;
}

module.exports = generateMarkdown;
