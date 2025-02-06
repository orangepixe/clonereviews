import type { UserModule } from '~/types'
import { registerScrollSpy } from 'vue3-scroll-spy'

export const install: UserModule = ({ app }) => {
  registerScrollSpy(app, {})
}
