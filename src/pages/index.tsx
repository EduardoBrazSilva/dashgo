import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/input';

export default function SignIn() {
  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      align='center' 
      justify='center'
    >
      <Flex
        as='form'
        width='100%'
        maxWidth='360px'
        bg='gray.800'
        padding='8'
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>

          <Input 
            name='email'
            type='email'
            label='E-mail'
          />

          <Input 
            name='password'
            type='password'
            label='Senha'
          />
          
        </Stack>

        <Button
          type='submit'
          marginTop='6'
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
