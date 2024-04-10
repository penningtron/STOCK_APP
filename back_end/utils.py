

from telesignenterprise.verify import VerifyClient
from telesign.util import random_with_n_digits

import os
# customer_id = os.getenv('CUSTOMER_ID', '679BB0A3-2F00-4ACE-88AC-9BBFF4E6B738')
# api_key = os.getenv('API_KEY', 'y7yDlzXlflXCjkJay0IS/cVQmSWZRbhCVsRrGux+z0kraLGGLmPqHPuz8zFzeGJ0d5aiDRF0hUxz0ZJfgwzLEA==')

customer_id = os.environ.get('CUSTOMER_ID')
api_key = os.environ.get('API_KEY')



def telesign_API(phone_number):
    # phone number is 11 digits and starts with 1, no dashes or spaces
    phone_number = os.getenv('PHONE_NUMBER', phone_number)
    verify_code = random_with_n_digits(5)
    # Instantiate a verification client object with your authentication credentials.
    verify = VerifyClient(customer_id, api_key)
    # Make the request and capture the response. Behind the scenes, this sends an HTTP request to the Telesign Verify API. Telesign then sends an SMS with an OTP to the end-user.

    response = verify.sms(phone_number, verify_code=verify_code)
    user_entered_verify_code = input("Please enter the verification code you were sent: ")

    if verify_code == user_entered_verify_code.strip():
        return True
    else:
        return False
    














