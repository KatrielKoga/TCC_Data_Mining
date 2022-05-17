alter table dezessete drop column categoria_onibus;
alter table dezessete drop column id;
alter table dezessete drop column nome;
alter table dezessete drop column integracao;
alter table dezessete drop column prefixo;
delete from vinte where tipo_cartao = 'Trocador' or tipo_cartao = 'Motorista' or tipo_cartao = 'Funcionário da Garagem' or tipo_cartao = 'Fiscal do Transporte';