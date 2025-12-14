
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {
  const {page,handlePageChange,totalpages} = useContext(AppContext);
  return (
    <div>
      <div>
        {
          page > 1 &&
          (<button onClick={() => handlePageChange(page -1 )}>
            previous
          </button>)
        }
        { page < totalpages && 
          (<button onClick={()=> handlePageChange(page + 1)}>
            Next
          </button>)
        }

        <p>
          Page {page} of {totalpages}
        </p>
      </div>
    </div>
  )
}
