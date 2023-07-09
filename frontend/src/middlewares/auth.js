export default function auth({ next }) {
    if (!localStorage.getItem("id")) {
        return next({
            name: 'Home'
        })
    }
    return next()
}
