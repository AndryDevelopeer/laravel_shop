interface mutations {
    logout(state): void

    setToken(state, token): void

    setTokens(state, tokens): void

    setErrors(state, errors): void

    setAuthErrors(state, errors): void
}

export default mutations