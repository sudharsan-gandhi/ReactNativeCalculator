const payload = (data, type) => ({
    payload: data,
    type: type
})

const insert = (data) => (payload(data,'insert'))

const remove = (data) => (payload(data,'remove'))

const removeAll = (data) => (payload(data,'removeAll'))



export default {
    insert,
    remove,
    removeAll,
}