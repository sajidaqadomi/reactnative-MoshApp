import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeperator from '../components/ListItemSeperator'
import Screen from '../components/Screen'

const InitMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
        description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        image: require('../../assets/mosh.jpg')
    },
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(InitMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = (message) => {
        //delete the messages from array
        //call the server to delet
        setMessages(messages.filter((m) => m.id !== message.id))


    }
    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        image={item.image}
                        title={item.title}
                        subTitle={item.description}
                        onPress={() => console.log('press', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        }
                    />
                )

                }
                ItemSeparatorComponent={() => <ListItemSeperator />

                }
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
