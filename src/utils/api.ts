const api = async (url: string) => {
  try {
    const songs = await fetch(url, {
      headers: {
        'X-API-Version': '10',
      }
    })
    const data = await songs.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong with the Scrobble api')
  }
}

export default api