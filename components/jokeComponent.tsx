import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function ChuckNorrisJokes() {
  type Joke = {
    value: string;
  };

  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const getJokes = async () => {
    try {
      setLoading(true);
      const requests = Array(5).fill(null).map(() =>
        fetch('https://api.chucknorris.io/jokes/random').then(res => res.json())
      );

      const results = await Promise.all(requests);

      setJokes(results);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    getJokes();
  }, []);

  return (
      <View className="p-20">
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          jokes.map((item, index) => (
            <View key={index} className="mb-10">
              <Text className="font-bold">
                Joke {index + 1}
              </Text>
              <Text>{item.value}</Text>
            </View>
          ))
        )}
        <Button title="Get New Jokes" onPress={getJokes}/>
      </View>
    );
  }