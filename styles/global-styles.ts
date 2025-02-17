import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    width: '100%',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 120,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    width: '80%',
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#00ff00',
    borderRadius: 5,
  },
});

export default globalStyles;
