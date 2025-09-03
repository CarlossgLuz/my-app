import { Image, TouchableOpacity } from "react-native"
import { styles } from "./style.js";

export const MoviesCard = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL} />
        </TouchableOpacity>
    )
}