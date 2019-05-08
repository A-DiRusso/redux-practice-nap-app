import { connect } from 'react-redux';
import ActivityComponent from '../components/ActivityComponent';
import {
    setActivityNap,
    setActivityEat,
    setActivityPlay,
} from '../actions-reducers';

const mapStateToProps = state => {
    return {
        activity: state.activity,
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps');
    return {
        handleClickEat: () => {
            console.log('handleClickEat');
            dispatch(setActivityEat());
        },
        handleClickNap: () => {
            console.log('handleClickNap')
            dispatch(setActivityNap());
        },
        handleClickPlay: () => {
            console.log('handleClickPlay')
            dispatch(setActivityPlay());
        },
    };
};

const makeSmartComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const ActivitiesComponent = makeSmartComponent(ActivityComponent);

export default ActivitiesComponent;