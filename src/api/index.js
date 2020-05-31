const token = process.env.GATSBY_GITHUB_TOKEN
const headers = {
  Authorization: `Token ${token}`,
}

export const getUser = async () => {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers,
  })
  const data = await response.json()
  return data
}
