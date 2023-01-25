interface state {
    authentication: {
        form: object
        errors: object
    }
    registration: {
        form: object
        errors: object
    }
    successCheckRefresh: boolean
    successAccess: boolean
    user: object
}

export default state