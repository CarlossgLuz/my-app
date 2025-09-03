import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { styles } from "./style.js";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching.js"

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg}></Image>
        <Image source={AmazonLogo} style={styles.amazonLogoImg}></Image>
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image source={MovieTheWheel}></Image>
        </TouchableOpacity>

        <Text style={styles.movieText}>Continue Assistindo...</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

        <Text style={styles.movieText}>Continue Assistindo...</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />

        <Text style={styles.movieText}>Continue Assistindo...</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.contentList}
        />
      </ScrollView>
    </View>
  );
};
