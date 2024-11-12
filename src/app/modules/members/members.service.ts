import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createMember = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const getAllMembers = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getMemberByMemberId = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};

export const MembersService = {
  createMember,
  getAllMembers,
  getMemberByMemberId,
};
