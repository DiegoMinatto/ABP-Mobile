import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    view: {
        backgroundColor: 'white',
      },
      content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      touch: {
        marginLeft: 10,
        marginRight: 10,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#2b419a',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      },
       entrar2: {
        alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
        paddingBottom: '6%',
        backgroundColor: '#27753D',
        borderColor: '#fff',
        width: '90%',
        marginBottom: 100,
      },
      entrar3: {
        alignItems: 'center', borderRadius: 30, marginTop: 10, paddingTop: '6%', color: '#6680AA',
        paddingBottom: '6%',
        backgroundColor: '#CA3737',
        borderColor: '#fff',
        width: '90%',
        marginBottom: 100,
       
      },
      textButton: {
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
        // fontFamily: 'open-sans-bold',
        fontWeight: 'bold'
      },  
      mainContainer: {
        marginLeft: 10,
        marginRight: 10,
      },
      containerTitulo: {
        alignItems: 'center',
        marginTop: 10,
    
      },
      TituloTexto: {
        fontSize: 20,
        color: '#2b419a'
      },
      botaoLogin: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 30,
      },
      textoBotao: {
        alignItems: 'center',
        color: 'white'
      },
      containerFlat:{
        marginTop:15,
      },
      mainContainer: {
        width: 500,
        marginLeft: 10,
        marginRight: 10,
      },
      BotaoCadastro: {
        width: 150,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewBotao: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      viewFlatList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#FFFAFA',
      },
      Card: {
        height: 80,
        borderColor: '#FFFAFA',
        borderWidth: 2,
        width: 370,
        borderRadius: 4,
        backgroundColor: '#2b419a'
      },
      TituloCard: {
        fontSize: 23,
        color: '#FFFFFF',
        fontWeight: 'bold'
      },
      DataCard: {
        fontSize: 18,
        color: '#FFFFFF'
      },
      ViewCard: {
        flex: 1,
        flexDirection: 'row',
        width: 370
      },
      ViewCardContent: {
        alignItems: 'center',
        marginTop: -10
      }
})