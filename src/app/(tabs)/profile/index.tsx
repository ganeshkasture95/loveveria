import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Profile = () => {

  const [options, setOptions] = useState("AD")
  const [description, setDescription] = useState("")
  const [activeSlide, setActiveSlide] = React.useState(0)

  const profileImages = [
    {
      image:
        "https://i.pinimg.com/474x/67/6e/48/676e489b3b629c8def5cc5214eae6305.jpg",
    },
    {
      image:
        "https://i.pinimg.com/474x/a2/b8/45/a2b84527e75fb6a54776e329f10245d0.jpg",
    },
    {
      image:
        "https://i.pinimg.com/474x/df/35/2b/df352bc7357b24d52b2d37c5049e8cbb.jpg",
    },
    {
      image:
        "https://i.pinimg.com/474x/f7/cd/ea/f7cdea5c96d7ae3e46730749463420f6.jpg",
    },
    {
      image:
        "https://i.pinimg.com/474x/41/f6/e3/41f6e37e255b9ad5774e3254197fb2be.jpg",
    },
  ];
  const turnons = [
    {
      id: "0",
      name: "Music",
      description: "Pop Rock-Indie pick our sound track",
    },
    {
      id: "10",
      name: "Kissing",
      description:
        " It's a feeling of closeness, where every touch of lips creates a symphony of emotions.",
    },
    {
      id: "1",
      name: "Fantasies",
      description:
        "Fantasies can be deeply personal, encompassing diverse elements such as romance",
    },
    {
      id: "2",
      name: "Nibbling",
      description:
        "playful form of biting or taking small, gentle bites, typically done with the teeth",
    },
    {
      id: "3",
      name: "Desire",
      description: "powerful emotion or attainment of a particular person.",
    },
  ];
  const data = [
    {
      id: "0",
      name: "Casual",
      description: "Let's keep it easy and see where it goes",
    },
    {
      id: "1",
      name: "Long Term",
      description: "How about a one life stand",
    },
    {
      id: "2",
      name: "Virtual",
      description: "Let's have some virtual fun",
    },
    {
      id: "3",
      name: "Open for Anything",
      description: "Let's Vibe and see where it goes",
    },
  ];

  const renderImageCarousel = ({ item }: { item: { image: string } }) => (
    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{
          width: "85%",
          resizeMode: "cover",
          height: 290,
          borderRadius: 10,
          transform: [{ rotate: "-5deg" }],
        }}
        source={{ uri: item.image }} // Access item.image here
      />
      <Text style={{ position: "absolute", top: 10, right: 10, color: "black" }}>
        {activeSlide + 1}/{profileImages.length}
      </Text>
    </View>
  );

  return (
    <View>
      <ScrollView className='' >
        <View className='  '>
          <Image source={require("p/public/assets/images/background.jpg")} className='w-full h-[250px]  top-0 ' />
          <View className=''>
            <View className=''>
              <Pressable className='px-3 w-[300px] mr-auto ml-auto justify-center items-center rounded-3xl  top-[-90px] left-[37%] translate-x-[-150px] ' >
                <Image source={require("p/public/assets/images/avatar.jpg")} className='w-[150px] border-4 border-white h-[150px] rounded-full' />
                <Text className=' font-bold text-2xl pt-2  '>
                  Sonu from Pune
                </Text>
                <Text className=' font-bold text-xl  '>
                  25 years
                </Text>
              </Pressable>
            </View>
          </View>


          <View className=' flex-row mx-4 items-center gap-3 justify-center' >

            <Pressable onPress={() => setOptions("AD")} >
              {options === "AD" ? (
                <Text className="text-black-500 text-xl">AD</Text>
              ) : (
                <Text className="text-gray-700 text-xl">AD</Text>
              )}
            </Pressable>

            <Pressable onPress={() => setOptions("Photos")} >
              {options === "Photos" ? (
                <Text className="text-black-500 text-xl">Photos</Text>
              ) : (
                <Text className="text-gray-700 text-xl">Photos</Text>
              )}
            </Pressable>

            <Pressable onPress={() => setOptions("Turn-on")} >
              {options === "Turn-on" ? (
                <Text className="text-black-500 text-xl">Turn-on</Text>
              ) : (
                <Text className="text-gray-700 text-xl">Turn-on</Text>
              )}
            </Pressable>

            <Pressable onPress={() => setOptions("Looking-For")} >
              {options === "Looking-For" ? (
                <Text className="text-black-500 text-xl">Looking For</Text>
              ) : (
                <Text className="text-gray-700 text-xl">Looking For</Text>
              )}
            </Pressable>


          </View>



          <View className='mx-4 my-1 mb-32'>


            {options === "AD" ? (
              <View className="gap-4 p-6 mt-4 bg-red-700/90 rounded-2xl mx-4 shadow-lg shadow-red-500">
                {/* Title */}
                <Text className="text-lg font-semibold text-white mb-2">
                  Description
                </Text>

                {/* Text Input with Placeholder */}
                <View className="flex-row items-center w-full bg-white/10 rounded-full px-4 py-3">
                  <TextInput
                    placeholder="Hi, I am Sonu from Pune. I am a software engineer."
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    className="text-white flex-1 pr-2"
                    onChangeText={(text) => setDescription(text)}
                  />
                </View>

                {/* Save Button */}
                <Pressable onPress={() => { /* Add your save function here */ }}>
                  <View className="bg-red-800 p-4 rounded-full items-center mt-4 active:opacity-90">
                    <Text className="text-white text-xl font-semibold">Save</Text>
                  </View>
                </Pressable>
              </View>
            ) : null}

            {options === "Photos" ? (
              <View className=''>
                <FlatList
                  data={profileImages}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 2, paddingVertical: 16 }}
                  ItemSeparatorComponent={() => <View style={{ width: 16 }} />} // Adds spacing between items
                  renderItem={({ item }) => (
                    <View className="flex flex-row items-center">
                      <Image
                        source={{ uri: item.image }}
                        className="w-40 h-72 rounded-lg"
                        style={{ resizeMode: "cover" }}
                      />
                    </View>
                  )}
                />



                <View className="flex gap-4 p-4 mt-4 bg-red-700/90 rounded-2xl items-center justify-center mx-4 shadow-lg shadow-red-500">
                  {/* Title */}
                  <Text className="text-lg font-semibold text-white mb-2">
                    Add Your Image
                  </Text>

                  {/* Input Field with Icon */}
                  <View className="flex-row items-center w-full bg-white/10 rounded-full px-4 py-3">
                    <Entypo name="image" size={22} color="white" style={{ marginRight: 8 }} />
                    <TextInput
                      placeholder="Enter image URL here"
                      placeholderTextColor="rgba(255, 255, 255, 0.7)"
                      className="text-white flex-1"
                    />
                  </View>

                  {/* Custom Button */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#d32f2f',
                      paddingVertical: 12,
                      paddingHorizontal: 24,
                      borderRadius: 100,
                      alignItems: 'center',
                      marginTop: 8,
                    }}
                    activeOpacity={0.8}
                  >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                      Add Image
                    </Text>
                  </TouchableOpacity>
                </View>


              </View>
            ) : null}

            {options === "Turn-on" ? (
              <View className="bg-red-900 p-4  rounded-3xl shadow-lg my-4 mx-4 border border-red-700">
                <Text className="text-2xl font-bold mb-4 text-white text-center">Turn-ons</Text>
                <View className="space-y-4 gap-2">

                  <View className="p-3 bg-red-800 rounded-2xl">
                    <Text className="text-lg font-semibold text-white">Music</Text>
                    <Text className="text-sm text-red-200 mt-1">
                      Pop, Rock, Indie – pick our soundtrack.
                    </Text>
                  </View>

                  <View className="p-3 bg-red-800 rounded-2xl">
                    <Text className="text-lg font-semibold text-white">Kissing</Text>
                    <Text className="text-sm text-red-200 mt-1">
                      It’s a feeling of closeness, where every touch creates a symphony of emotions.
                    </Text>
                  </View>

                  <View className="p-3 bg-red-800 rounded-2xl">
                    <Text className="text-lg font-semibold text-white">Desire</Text>
                    <Text className="text-sm text-red-200 mt-1">
                      A powerful emotion, pursuing a deep connection.
                    </Text>
                  </View>

                </View>
              </View>
            ) : (
              null
            )}

            {options === "Looking-For" ? (
              <View className="bg-red-900 p-4 rounded-3xl shadow-lg my-4 mx-4 border border-red-700">
                <Text className="text-2xl font-bold mb-4 text-white text-center">Looking For</Text>
                <View className="space-y-4">
                  <View className="p-3 bg-red-800 rounded-2xl">
                    <Text className="text-lg font-semibold text-white">Partner</Text>
                    <Text className="text-sm text-red-200 mt-1">
                      I am looking for a partner who is loving and caring.
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              null
            )}


          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile