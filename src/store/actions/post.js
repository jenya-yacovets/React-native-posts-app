import * as FileSystem from 'expo-file-system'

import DB from "../../db"
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOOGLE_BOOKED } from "../types"

export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPosts()

        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
}

export const toogleBooked = (post) => async dispatch => {
    try {
        await DB.updatePost({
            id: post.id,
            booked: post.booked
        })
    } catch (error) {
        console.error(error)
    }

    dispatch({
        type: TOOGLE_BOOKED,
        payload: post.id
    })
}

export const removePost = (id) => async dispatch => {

    try {
        await DB.removePost({
            id
        })
    } catch (error) {
        console.error(error)
    }

    dispatch({
        type: REMOVE_POST,
        payload: id
    })
}

export const addPost = post => async dispatch => {

    const fileName = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName

    try {

        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (error) {
        console.error(error)
    }

    let payload = { ...post, img: newPath }

    payload.id = await DB.createPost(payload)

    dispatch({
        type: ADD_POST,
        payload
    })
}