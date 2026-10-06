---
title: "Examen mixto"
description: Veinticinco preguntas aleatorias de todos los bloques.
sidebar_position: 8
tags: [autoevaluacion]
---

import Quiz from "@site/src/components/Quiz";
import { linux } from "@site/src/data/quizzes/linux";
import { redes } from "@site/src/data/quizzes/redes";
import { bbdd } from "@site/src/data/quizzes/bbdd";
import { java } from "@site/src/data/quizzes/java";
import { marcas } from "@site/src/data/quizzes/marcas";
import { herramientas } from "@site/src/data/quizzes/herramientas";

# Examen mixto

Veinticinco preguntas aleatorias de todos los bloques. Recarga la página para obtener otro examen.

<Quiz shuffle limit={25} questions={[...linux, ...redes, ...bbdd, ...java, ...marcas, ...herramientas]} />
