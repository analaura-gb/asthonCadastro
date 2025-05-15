import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const itajuba = await prisma.city.create({
    data: {
      city: "Itajubá",
      cityName: "Itajubá",
      cityLatitude: "-22.4225",
      cityLongitude: "-45.4598",
    },
  });

  const guaratingueta = await prisma.city.create({
    data: {
      city: "Guaratinguetá",
      cityName: "Guaratinguetá",
      cityLatitude: "-22.8166",
      cityLongitude: "-45.1928",
    },
  });

  const passaQuatro = await prisma.city.create({
    data: {
      city: "Passa Quatro",
      cityName: "Passa Quatro",
      cityLatitude: "-22.3873",
      cityLongitude: "-44.9707",
    },
  });

  const occurrence = await prisma.occurrence.create({
    data: {
      description: "Deslizamento de terra",
      date: new Date().toISOString(),
      cityId: itajuba.id,
    },
  });

  const videoMedia = await prisma.media.create({
    data: {
      fileName: "registro_video.mp4",
      type: "VIDEO",
      duration: 60,
      width: 1920,
      height: 1080,
      occurrenceId: occurrence.id,
    },
  });

  const pictureMedia = await prisma.media.create({
    data: {
      fileName: "registro_imagem.jpg",
      type: "PICTURE",
      duration: 0,
      width: 1280,
      height: 720,
      occurrenceId: occurrence.id,
    },
  });

  const hashedCommonPassword = await bcrypt.hash("senha123", 10);
  const commonUser = await prisma.user.create({
    data: {
      name: "Usuário Comum",
      email: "comum@example.com",
      password: hashedCommonPassword,
      role: "COMMON",
    },
  });

  const hashedAsthonPassword = await bcrypt.hash("senha456", 10);
  const asthonUser = await prisma.user.create({
    data: {
      name: "Usuário Asthon",
      email: "asthon@example.com",
      password: hashedAsthonPassword,
      role: "ASTHON",
    },
  });

  await prisma.alert.createMany({
    data: [
      {
        timestamp: new Date().toISOString(),
        sender: "Defesa Civil",
        message: "Alerta de enchente iminente.",
        cityId: itajuba.id,
      },
      {
        timestamp: new Date().toISOString(),
        sender: "Prefeitura",
        message: "Alerta de ventos fortes na região.",
        cityId: passaQuatro.id,
      },
    ],
  });

  console.log("✅ Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
