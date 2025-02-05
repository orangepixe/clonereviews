import { registerScrollSpy } from 'vue3-scroll-spy';
import type { UserModule } from '~/types'
export const install: UserModule = ({ app }) => {
  registerScrollSpy(app, {})
}
