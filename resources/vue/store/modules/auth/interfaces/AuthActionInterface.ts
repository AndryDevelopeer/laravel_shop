interface actions {
    logout({commit}): void

    registration(context): void

    login(context): void

    checkRefresh(context): void
}

export default actions