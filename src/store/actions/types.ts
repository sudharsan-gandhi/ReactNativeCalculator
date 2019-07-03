const payload = (data, type) => ({
    payload: data,
    type: type
})

const Types = {
    insert : 'insert',
    remove : 'remove',
    removeAll: 'removeAll',
    mem_insert: 'mem_insert',
    mem_remove: 'mem_remove',
    replace: 'replace'
}

const insert = (data) => (payload(data,'insert'))

const replace = (data) => (payload(data, 'replace'))

const remove = () => ({type: 'remove'})

const removeAll = () => ({type: 'removeAll'})

const mem_insert = (data) => (payload(data, 'mem_insert'))

const mem_remove = (data) => (payload(data, 'mem_remove'))


export default {
    insert,
    replace,
    remove,
    removeAll,
    mem_insert,
    mem_remove,
    Types
}