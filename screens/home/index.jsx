import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../home/styles";
import { FontAwesome } from '@expo/vector-icons';


export default function Home(){
    function handleAluno(){
        console.log('ola')
    }

    return(
        <View style={styles.container}>
           
           <View style={styles.divfoto}>
            <Image style={styles.foto} source={{uri: 'https://images6.alphacoders.com/121/1215308.jpg'}}/>
           </View>

           <View style={styles.cabecalho}>
           <TextInput style={styles.pesquisa}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}><FontAwesome name="search" size={24} color="black" /></Text>
            </TouchableOpacity>
           </View>

           <View style={styles.divcards}>

                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/c8/fd/98/c8fd98ad7875b754268b25f71e9d9117.jpg'}}/>
                    <TextInput style={styles.textos}/>
                </View>

                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: 'https://64.media.tumblr.com/7dbeab267b0d09a584c4591cd656c08b/91c92eaf60dc0db6-af/s400x600/21bde67c40c3498f25729f2788dfbab8d4be2b78.jpg'}}/>
                    <TextInput style={styles.textos}/>
                </View>

                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe12Rp6hqMIjUBl3V3PUNzW-R2YGYMb3w4C_JxzImVNV0dIGlwfn4YWVPxad40_XMeOko&usqp=CAU'}}/>
                    <TextInput style={styles.textos}/>
                </View>

                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/0d/0b/68/0d0b684b144161707c7bdcc3027d3524.jpg'}}/>
                    <TextInput style={styles.textos}/>
                </View>

           </View>

        </View>
    )
}