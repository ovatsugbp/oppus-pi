package br.com.oppus;

import br.com.oppus.api.model.repositories.Database;
import br.com.oppus.api.model.entities.Professional;
import br.com.oppus.api.model.entities.Schedule;
import br.com.oppus.api.model.entities.User;


import java.util.Scanner;

public class ApplicationOppus {

    static Database db;

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        db = new Database();
        int option;

        do{
            System.out.println("Selecione de 1 a 4 a ação desejada:");
            System.out.println("1 - Cadastrar Profissionais");
            System.out.println("2 - Atualizar agenda do profissional");
            System.out.println("3 - Cadastrar Usuários");
            System.out.println("4 - Listar todos os profissionais cadastrados");
            System.out.println("5 - Buscar Profissionais");
            System.out.println("6 - Sair");
            System.out.println("-------------------- \n");
            option = input.nextInt();

            if(option == 1){
                System.out.println("------CADASTRO DE PROFISSIONAL-----");
                System.out.println("Digite o nome do profissional que será cadastrado: ");
                String name = input.next();

                int id = (int) System.currentTimeMillis();

                System.out.println("Digite a sua profissão: ");
                String profession = input.next();

                int idActivity = (int) System.currentTimeMillis();
                System.out.println("Qual dia da semana você está disponível: ");
                String day = input.next();

                Professional newProfessional = new Professional(id, name, profession);
                newProfessional.addSchedule(new Schedule(idActivity, day));

                String answer;
                do {
                    System.out.println("Deseja adicionar outro dia na sua agenda? S/n");
                    answer = input.next();

                    if (answer.equalsIgnoreCase("S")){
                        idActivity = (int) System.currentTimeMillis();
                        System.out.println("Qual dia da semana você está disponível: ");
                        day = input.next();

                        newProfessional.addSchedule(new Schedule(idActivity, day));
                    }
                }while (answer.equalsIgnoreCase("S"));

                db.addNewProfessional(newProfessional);
            }

            if(option == 2){
                System.out.println("------ATUALIZAÇÃO DE AGENDA DO PROFISSIONAL-----");
                String action = input.next();
                System.out.println("O que você gostaria de mudar na agenda? ");
                System.out.println("a - Deletar um dia da agenda");
                System.out.println("b -  Adicionar um dia na agenda");

                Professional professional = new Professional(1,"","");
                if(action.equals("a")){
                    System.out.println("Que dia da agenda você gostaria de excluir?");
                    professional.deleteSchedule();
                }
            }

            if(option == 3){
                System.out.println("------CADASTRO DE USUÁRIO-----");
                System.out.println("Digite o nome do usuário que será cadastrado: ");
                String name = input.next();

                int id = (int) System.currentTimeMillis();

                User newUser = new User(id, name);
                db.addNewUser(newUser);

            }
            if(option == 4) {


                System.out.println("------LISTA DE PROFISSIONAIS REGISTRADOS-----");
                db.getProfessionals();

//                for(Professional professional : persistedProfessionals) {
//                    if(professional != null){
//                        if(professional != null) {
//                            System.out.println("Nome: " + professional.getName());
//                            System.out.println("Profissão: " + professional.getNameActivity());
//                            System.out.println("Dias disponíveis: " + professional.getProfessionalSchedule());
//                            System.out.println("---------------------------------------------");
//                        }
//                    }
//                }

            }
            if(option == 5) {
                System.out.println("------BUSCA POR PROFISSIONAIS-----");
                System.out.println("Qual profissional que você procura? ");
                String searchActivity = input.next();

                db.searchProfessionals(searchActivity);
                System.out.println("---------------------------------------------");
//                Adicionar método de busca

            }


        }while(option != 6);
        System.out.println("Obrigado");

        input.close();
    }
}