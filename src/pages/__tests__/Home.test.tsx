import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Home from '../Home'
import { useAppStore } from '../../store/useAppStore'

vi.mock('../../hooks/usePosts', () => ({
  usePosts: () => ({ data: [], isLoading: false, isError: false }),
}))

describe('Home', () => {
  beforeEach(() => {
    useAppStore.setState({ count: 0 })
  })

  it('renderiza a seção do contador', () => {
    render(<Home />)
    expect(screen.getByText('Contador (Zustand)')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('incrementa o contador ao clicar em +', async () => {
    render(<Home />)
    await userEvent.click(screen.getByText('+'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrementa o contador ao clicar em -', async () => {
    render(<Home />)
    await userEvent.click(screen.getByText('-'))
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('reseta o contador', async () => {
    render(<Home />)
    await userEvent.click(screen.getByText('+'))
    await userEvent.click(screen.getByText('+'))
    await userEvent.click(screen.getByText('Reset'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
