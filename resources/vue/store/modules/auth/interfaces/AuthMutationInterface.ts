interface mutations {
    logout(state): void,

    setTokens(state, data): void,

    setErrors(state, errors): void
}

export default mutations