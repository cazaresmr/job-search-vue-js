import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'
// import { expect } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('BoBo Careers')
    expect(companyName).toBeInTheDocument()
  })
})

// cazaresmr@~/Desktop/trueCoders/repos/vue/masterclass-boris/job-search$ npm run test:unit
