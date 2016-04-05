/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4 -*- */
/*
 * This file is part of the LibreOffice project.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
#ifndef LOOL_UNIT_HPP
#define LOOL_UNIT_HPP

#include <string>

class UnitHooks;

#define CREATE_UNIT_HOOKS_SYMBOL "unit_create"
typedef UnitHooks *(CreateUnitHooksFunction)(void *dlHandle);

/// Derive your unit test / hooks from me.
class UnitHooks
{
    void *_dlHandle;
    static UnitHooks *_global;
public:
             UnitHooks(void *dlHandle);
    virtual ~UnitHooks();
	static UnitHooks &get() { return *_global; }
    /// Load unit test hook shared library from this path
    static bool init(const std::string &unitLibPath);

	virtual void preSpawnCount(int & /* nNumPrefork */) {}
};

#endif // LOOL_UNIT_HPP

/* vim:set shiftwidth=4 softtabstop=4 expandtab: */
