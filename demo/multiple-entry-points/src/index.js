import ReactDOM from 'react-dom';

const getIndexFile = () => {
    const environments = {
        ADMIN: 'index-admin',
        CLIENT: 'index-client',
    }

    const buildTarget = process.env.REACT_APP_BUILD_TARGET;

    if (buildTarget) {
        const result = environments[buildTarget]
        // A check to avoid typo
        if (!result) {
            throw new Error(`Incorrect REACT_APP_BUILD_TARGET: ${buildTarget}`)
        }
        return result
    }

    switch (window.location.hostname) {
        case 'admin.project.com':
            return environments.ADMIN
        case 'client.project.com':
            return environments.CLIENT
        default:
            throw new Error(`Unknown host ${window.location.hostname}`)
    }
}

import(`./index/${getIndexFile()}`).then(({ render }) => {
    ReactDOM.render(render(), document.getElementById('root'))
})
