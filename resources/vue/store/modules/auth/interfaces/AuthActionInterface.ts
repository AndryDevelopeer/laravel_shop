interface actions {
    logout({commit}): void,

    login(context): void,

    checkRefresh(context): void
}

export default actions