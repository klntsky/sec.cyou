import { useEffect, useState } from 'react'

import { Button } from '..'
import { getEndPageNumbers } from './helpers'

import './style.css'

export interface PaginationProps {
  page?: number
  pagesTotal: number
  pagesAtTime: number
  onChangePage: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(props.page ?? 1)
  const pageRange = getEndPageNumbers(currentPage, props.pagesAtTime, props.pagesTotal)

  useEffect(() => {
    props.onChangePage(currentPage)
  }, [currentPage])

  const PageButtons = () => {
    const buttons = []
    for (let page = pageRange.from; page <= pageRange.to; page++){
      buttons.push(
        <Button
          key={page}
          className='page number'
          isActive={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      )
    }

    return buttons;
  }

  return (
    <div className="pagination">
      <Button
        className={'page neigbour'}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Back
      </Button>

      <Button
        className={'page number'}
        onClick={() => setCurrentPage(1)}
        hidden={pageRange.from === 1}
      >
        1
      </Button>

      <PageButtons />

      <Button
        className={'page number'}
        onClick={() => setCurrentPage(props.pagesTotal)}
        hidden={pageRange.to === props.pagesTotal}
      >
        { props.pagesTotal }
      </Button>

      <Button
        className={'page neigbour'}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === props.pagesTotal}
      >
        Next
      </Button>
    </div>
  )
}
