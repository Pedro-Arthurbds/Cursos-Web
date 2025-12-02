const inquirer = require('inquirer');

async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: 'Digite seu email:',
                validate: (input) => {
                    if (input.includes('@')) return true;
                    return 'Por favor, insira um email válido';
                }
            },
            {
                type: 'password',
                name: 'senha',
                message: 'Digite sua senha:',
                mask: '*'
            }
        ]);
        
        console.log(`Email: ${answers.email}`);
        console.log(`Senha: ${'*'.repeat(answers.senha.length)}`);
        
    } catch (error) {
        console.error('Erro:', error);
    }
}

main();