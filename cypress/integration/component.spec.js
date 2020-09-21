import mountVue from 'cypress-vue-unit-test'
import Logo from '~/components/Logo.vue'

describe('My Vue', () => {
  beforeEach(mountVue(Logo))
  it('renders', () => {
    // Any Cypress command
    // Cypress.vue is the mounted component reference
  })
})
