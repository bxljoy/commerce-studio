import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'grbf6jao',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    /**
     * The deployed studio at https://commerce-cms.sanity.studio.
     * Pinning it keeps `sanity deploy` from prompting for an app id, which
     * would hang a non-interactive run such as CI.
     */
    appId: 'q96izw2ctyh0e2yluew3abu1',
  },
})
