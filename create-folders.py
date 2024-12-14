import shutil
import os

path = './'

def create_folders():
    for num in range(1, 21):
        if os.path.exists(f'{path}/{num}'):
            print('Path already exists!')
            continue
        else:
            os.makedirs(f'{path}/{num}')
            print(f'{num} folder created')
    print('Done!')

create_folders()