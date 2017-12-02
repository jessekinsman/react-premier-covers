const getRelative = (path) => {
  if (process.env.NODE_ENV === 'production') {
    return `/react-premier-covers${path}`
  }
  return path;
}
export default getRelative;
