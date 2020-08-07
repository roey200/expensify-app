import moment from 'moment'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'

test('Should generate set start date action', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate sort by date action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should generate sort by amount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should generate edit text filter with text action', () => {
    const action = setTextFilter('Do something')
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: 'Do something'
    })
})

test('Should generate edit text filter without text action', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER',
        text: ''
    })
})
