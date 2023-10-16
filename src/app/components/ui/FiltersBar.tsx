'use client'
import { Divider, Input, Typography } from '@mui/material'
import styles from '../../styles/filters.module.css'

export default function FilterBar(){
    return (
        <div className={styles.container}>
            <Typography variant="h4" component="div" fontWeight="bold">
                Filters
            </Typography>
            <Divider variant='fullWidth' />
            <Typography variant="h6" component="div">
                Price
            </Typography>
            <Input placeholder="Min" type="number" />
            <Input placeholder="Max" type="number" />
            <Divider variant='fullWidth' />
            <Typography variant="h6" component="div">
                Personal Attributes
            </Typography>
            
        </div>
    )
}
