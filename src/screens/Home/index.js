import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESTHUMBNAIL } from "../../utils/moviesThumbnails";
import PrimeVideoLogo from "../../assets/prime_video.png"
import AmazonLogo from "../../assets/amazon_logo.png"
import Icon from "react-native-vector-icons/Ionicons"

export const Home = () => {
  return (
    <View style={styles.container}>

{/* LogoTipo */}
      <View style={styles.header}>
        <Image source = {PrimeVideoLogo} style={styles.primeLogoImg}></Image>
        <Image source = {AmazonLogo} style={styles.amazonLogoImg}></Image>
      </View>

{/* Botão Navegação */}
      <View style={styles.category}>
        <TouchableOpacity>
          <Icon></Icon>
            <Text style = {styles.categoryText} >Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style = {styles.categoryText}>Séries</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style = {styles.categoryText}>Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style = {styles.categoryText}>Crianças</Text>
        </TouchableOpacity>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}> 

{/* Thumbnail */}
      <Text style={styles.movieText}>Acabaram de chegar</Text>
        <FlatList
        data={MOVIESTHUMBNAIL}
        keyExtractor={(item) => item.id}
        renderItem= {({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        style = {styles.contentList}
        />

      <Text style={styles.movieText}>Continue assistindo...</Text>

      <FlatList
        data={MOVIESWATCHING}
        keyExtractor={(item) => item.id}
        renderItem= {({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        style = {styles.contentList}
        />

      <Text style={styles.movieText}>Recomendados</Text>

      <FlatList
        data={MOVIESWATCH}
        keyExtractor={(item) => item.id}
        renderItem= {({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        style = {styles.contentList}
        />

      <Text style={styles.movieText}>Filmes de Crime</Text>

      <FlatList
        data={MOVIESCRIME}
        keyExtractor={(item) => item.id}
        renderItem= {({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
        style = {styles.contentList}
        />
        <Viwe>
          <Text>Carlos Gabriel Gomes Luz</Text>
        </Viwe>
        </ScrollView>

      <View style = {styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="home" size={25} color={"#fff"}></Icon>
          <Text style={styles.label}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-down-circle" size={25} color={"#fff"}></Icon>
          <Text style={styles.label}>Downloads</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="settings" size={25} color={"#fff"}></Icon>
          <Text style={styles.label}>Config</Text>        
        </TouchableOpacity>
      </View>
    </View>

  );
};
