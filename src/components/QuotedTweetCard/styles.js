const styles = () => ({
  root: {
    marginTop: 16,
  },
  header: {
    paddingBottom: 10,
  },
  author: {
    paddingLeft: 8,
  },
  userName: {
    fontWeight: 'bold',
  },
  screenName: {
    display: 'flex',
    alignItems: 'center',
  },
  retweetHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
  },
  retweetHeaderTitle: {
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  date: {
    paddingLeft: 4,
  },
  mediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: 'black',
  },
  media: {
    maxHeight: 400,
  },
})

export default styles
