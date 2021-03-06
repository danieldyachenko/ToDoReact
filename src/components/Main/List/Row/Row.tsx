import React, {FC} from 'react';
import {Box, Checkbox, IconButton, Divider, Tooltip} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {IRowProps} from "./RowTypes";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ViewContent from "./ViewContent/ViewContent";
import {useStyles} from "./RowStyles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useMediaQuery } from 'react-responsive'

export const Row: FC<IRowProps> = props => {

    // const isMobile: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')); // > 600px
    const isMobile: boolean = useMediaQuery({ maxWidth: 600 })

    const stylesProps = {
        textDecoration: props.isPerformed ? 'line-through' : 'none',
    };
    const classes = useStyles(stylesProps);

    return (
        <div
            className={classes.root}
            onTouchStart={() => {isMobile && props.setActiveRow(props.id)}}
            onMouseMove={() => {!isMobile && props.setActiveRow(props.id)}}
            onMouseLeave={() => {!isMobile && props.setActiveRow(null)}}
            id='draggable-row'
        >
            <Tooltip title={props.isPerformed ? 'Performed' : 'Not performed'} placement="top">
                <Checkbox color='primary' checked={props.isPerformed} onChange={() => {props.setPerformed(props.id)}}/>
            </Tooltip>
            <Tooltip title={props.isTagged ? 'Tagged' : 'Not tagged'} placement="top" className={classes.star}>
                <IconButton onClick={() => {props.setTag(props.id)}}>
                    {props.isTagged
                        ? <StarIcon color="primary"/>
                        : <StarBorderIcon/>
                    }
                </IconButton>
            </Tooltip>
            <Box className={classes.text} textOverflow="ellipsis" overflow="hidden">
                {props.text}
            </Box>
            {props.activeRowIndex === props.id ?
                <>
                    <Tooltip title="Edit" placement="top">
                        <IconButton onClick={() => {props.setEditModeIndex(props.id)}}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Divider orientation="vertical" flexItem/>
                    <ViewContent text={props.text} setActiveRow={props.setActiveRow}/>
                    <Divider orientation="vertical" flexItem/>
                    <Tooltip title="Delete" placement="top">
                        <IconButton onClick={() => {props.deleteTasks(props.id)}}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </>
                :
                <Box className={classes.date}>{props.date}</Box>
            }
        </div>
    );
};