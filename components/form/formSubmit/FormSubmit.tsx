import React from 'react'

import { StyledFormItem } from "../formItem/FormItem"
import { Button } from '../../button/Button'

export const FormSubmit = () => {
    return(
        <StyledFormItem>
            <Button 
                type="submit" 
                form="main_form" 
                value="Submit"
                fullWidth={true}
            >
                Search
            </Button>
        </StyledFormItem>
    )
}