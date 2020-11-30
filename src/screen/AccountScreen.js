import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'


import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeperator from '../components/ListItemSeperator'
import Screen from '../components/Screen'
import useAuth from '../auth/useAuth'




const MenuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
            color: colors.white,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
            color: colors.white,
        },
        targetScreen: 'Messages'
    }
]
const AcountScreen = ({ navigation }) => {
    const { logOut } = useAuth();
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require('../../assets/mosh.jpg')}
                    title='codewithmosh@gmail.com'
                    subTitle='aaaaaaaaaaa'
                />

            </View>
            <View style={styles.container}>
                <FlatList
                    data={MenuItems}
                    keyExtractor={(m) => m.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon
                                name={item.icon.name}
                                color={item.icon.color}
                                backgroundColor={item.icon.backgroundColor}
                            />}
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />

                    )

                    }
                />

            </View>

            <View style={styles.container}>
                <ListItem
                    title='Log Out'
                    IconComponent={<Icon
                        name='logout'
                        color={colors.white}
                        backgroundColor='#ffe66d'
                    />}
                    onPress={() => logOut()}

                />

            </View>


        </Screen>
    )
}

export default AcountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        backgroundColor: colors.white,
        padding: 15,
        marginBottom: 15
    }
})
