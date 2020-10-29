exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      name
      repositories(first: 10) {
        nodes {
            id
            name
            description
            url
            updatedAt
            openGraphImageUrl
            stargazers {
              totalCount
            }
            primaryLanguage {
              name
            }
            languages(first: 10) {
              nodes {
                name
              }
            }
        }
      }
    }
  }
`