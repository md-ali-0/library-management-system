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

const updateMemberByBookId = async (
  memberId: string,
  payload: Partial<Member>,
) => {
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });
  return result;
};

const deleteMemberByMemberId = async (memberId: string) => {
  const result = await prisma.member.delete({
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
  updateMemberByBookId,
  deleteMemberByMemberId,
};
